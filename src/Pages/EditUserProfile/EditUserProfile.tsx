import { CameraAltOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loader/Loading";
import { useGetUserQuery, useUpdateUserMutation, useUploadSingleImageMutation } from "../../services/apiSlice";
import { useState } from "react";
import { toast } from "react-toastify";

const EditUserProfile = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetUserQuery(id);
    const [updateUser] = useUpdateUserMutation();
    const [uploadImg] = useUploadSingleImageMutation();

    // Local State for Editable Fields
    const [bio, setBio] = useState(data?.bio || "");
    const [languages, setLanguages] = useState(data?.languages || []);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [profileImage, setProfileImage] = useState(data?.avatar?.url || "");
    const [newImage, setNewImage] = useState(null);

    if (isLoading) return <Loading />;

    // Handle File Selection for Profile Image
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
            setNewImage(file);
        }
    };

    // Handle Adding a Language
    const addLanguage = () => {
        if (selectedLanguage && !languages.includes(selectedLanguage)) {
            setLanguages([...languages, selectedLanguage]);
            setSelectedLanguage("");
        }
    };

    // Handle Removing a Language
    const removeLanguage = (lang) => {
        setLanguages(languages.filter((l) => l !== lang));
    };

    // Handle Save Profile
    const handleSave = async () => {
        let imgUrl = profileImage;

        try {
            if (newImage) {
                const imageData = new FormData();
                imageData.append("file", newImage);

                const res = await uploadImg(imageData).unwrap();
                imgUrl = res?.url; // Assuming the response contains `url`
                console.log("Uploaded Image URL:", imgUrl);
            }
        } catch (error) {
            console.error("Image upload failed:", error);
            toast.error("Failed to upload image. Please try again.");
            return; // Stop execution if image upload fails
        }
        console.log(languages);
        const formData = [
            bio,
            languages,
            imgUrl
        ]
        console.log(formData);

        // try {
        //     await updateUser(formData).unwrap();
        //     toast("Profile updated successfully!");
        // } catch (error) {
        //     console.error("Failed to update profile:", error);
        // }
    };

    return (
        <div className="pb-14 md:pb-16">
            <div className="container mx-auto">
                <div>
                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold mb-1">Edit Profile</h2>
                        <p className="text-text3">The information you share will be used across Airbnb to help other guests and Hosts get to know you.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 border border-border1 rounded-xl p-6">
                        {/* Profile Image Section */}
                        <div className="min-w-32 w-32 h-32 border border-primary rounded-full p-2">
                            <div className="relative w-full h-full overflow-hidden rounded-full">
                                {profileImage ? (
                                    <img src={profileImage} className="rounded-full w-full h-full object-cover" alt="Profile" />
                                ) : (
                                    <span className="w-full h-full bg-primary rounded-full p-2 flex items-center justify-center">
                                        <span className="text-5xl font-semibold uppercase text-white">
                                            {data.first_name.charAt(0)}
                                        </span>
                                    </span>
                                )}
                                <label htmlFor="file" className="cursor-pointer w-full h-9 absolute bottom-0 bg-text1 opacity-80 flex items-center justify-center text-white">
                                    <span><CameraAltOutlined className="!text-xl" /></span>
                                    <input type="file" id="file" hidden onChange={handleFileChange} />
                                </label>
                            </div>
                        </div>

                        {/* Profile Details Section */}
                        <div className="w-full">
                            {/* Bio Section */}
                            <div>
                                <h5 className="text-xl font-semibold">About You</h5>
                                <p className="text-text3">Tell us a little bit about yourself so your future Hosts or guests can get to know you</p>
                                <textarea
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    rows={4}
                                    placeholder="Write something fun and punchy."
                                    className="focus:ring-0 focus:border-primary py-2 px-3 text-text1 placeholder:text-text3 border-border1 w-full rounded-md resize-none mt-4"
                                />
                                <p className="text-end text-sm"><b>{500 - bio.length}</b> characters available</p>
                            </div>

                            {/* Languages Section */}
                            <div className="mt-5">
                                <h5 className="text-xl font-semibold">Languages you speak</h5>
                                <p className="text-text3">List the languages you speak to help others communicate with you easily.</p>
                                <div className="mt-4">
                                    <div className="flex flex-col gap-4">
                                        {/* Displaying User's Languages */}
                                        {languages.map((lang, index) => (
                                            <div key={index} className="flex items-center gap-4">
                                                <input
                                                    type="text"
                                                    className="focus:ring-0 focus:border-primary py-2 text-text1 border-border1 w-full max-w-[200px] rounded-md"
                                                    value={lang}
                                                    readOnly
                                                />
                                                <button
                                                    className="font-medium underline text-red-600 text-sm"
                                                    onClick={() => removeLanguage(lang)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}

                                        {/* Add New Language Dropdown */}
                                        <div className="flex items-center gap-4">
                                            <select
                                                className="focus:ring-0 focus:border-primary py-2 px-3 text-text1 border-border1 w-full max-w-[200px] rounded-md"
                                                value={selectedLanguage}
                                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                            >
                                                <option value="">Select a language</option>
                                                <option value="English">English</option>
                                                <option value="Hindi">Hindi</option>
                                                <option value="Spanish">Spanish</option>
                                                <option value="French">French</option>
                                            </select>
                                            <button
                                                className="font-medium underline text-text1 text-sm"
                                                onClick={addLanguage}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Save & Cancel Buttons */}
                            <div className="mt-8 flex justify-end gap-3">
                                <button type="button" className="btn1" onClick={handleSave}>Save</button>
                                <button type="button" className="btn1 border border-text1 !bg-transparent !text-text1 hover:!text-primary hover:border-primary">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserProfile;
