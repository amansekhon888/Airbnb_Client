import { CameraAltOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loader/Loading";
import { useGetUserQuery, useUpdateUserMutation, useUploadSingleImageMutation } from "../../services/apiSlice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const EditUserProfile = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetUserQuery(id);
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
    const [uploadImg, { isLoading: isUploading }] = useUploadSingleImageMutation();

    // State for Editable Fields
    const [bio, setBio] = useState("");
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [newImage, setNewImage] = useState(null);
    const [oldImagePublicId, setOldImagePublicId] = useState(null);
    const [isModified, setIsModified] = useState(false);

    // Set Default Values when Data Loads
    useEffect(() => {
        if (data) {
            setBio(data.bio || "");
            setLanguages(data.languages || []);
            setProfileImage(data.avatar?.url || "");
            setOldImagePublicId(data.avatar?.publicId || null);
        }
    }, [data]);

    if (isLoading) return <Loading />;

    // Handle File Selection for Profile Image
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
            setNewImage(file);
            setIsModified(true);
        }
    };
    const handleBioChange = (e) => {
        setBio(e.target.value);
        setIsModified(true);
    };

    // Handle Adding a Language
    const addLanguage = () => {
        if (selectedLanguage && !languages.includes(selectedLanguage)) {
            setLanguages([...languages, selectedLanguage]);
            setSelectedLanguage("");
            setIsModified(true);
        }
    };

    // Handle Removing a Language
    const removeLanguage = (lang) => {
        setLanguages(languages.filter((l) => l !== lang));
        setIsModified(true);
    };

    // Handle Save Profile
    const handleSave = async () => {
        let avatar = data.avatar;

        try {
            if (newImage) {
                const imageData = new FormData();
                imageData.append("image", newImage);
                imageData.append("folder", "profile");
                if (oldImagePublicId) imageData.append("oldImagePublicId", oldImagePublicId); // Send old image ID for deletion

                const res = await uploadImg(imageData).unwrap();
                avatar = res;
                setNewImage(null);
            }
        } catch (error) {
            console.error("Image upload failed:", error);
            toast.error("Failed to upload image. Please try again.");
            return;
        }

        // Prepare updated data (only send changed fields)
        const updatedData = {};
        if (bio !== data.bio) updatedData.bio = bio;
        if (JSON.stringify(languages) !== JSON.stringify(data.languages)) updatedData.languages = languages;
        if (avatar !== data.avatar) updatedData.avatar = avatar;

        // If no changes, do nothing
        if (Object.keys(updatedData).length === 0) {
            toast.info("No changes detected.");
            return;
        }

        try {
            await updateUser(updatedData).unwrap();
            toast.success("Profile updated successfully!");
            setIsModified(false);
        } catch (error) {
            console.error("Failed to update profile:", error);
            toast.error("Profile update failed.");
        }
    };

    const handleCancel = () => {
        setBio(data.bio || "");
        setLanguages(data.languages || []);
        setProfileImage(data.avatar?.url || "");
        setNewImage(null);
        setIsModified(false);
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
                                            {data?.first_name?.charAt(0) || "U"}
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
                                    onChange={handleBioChange}
                                    rows={4}
                                    maxLength={500}
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
                                        {languages.map((lang, index) => (
                                            <div key={index} className="flex items-center gap-4">
                                                <input
                                                    type="text"
                                                    className="focus:ring-0 focus:border-primary py-2 text-text1 border-border1 w-full max-w-[200px] rounded-md"
                                                    value={lang}
                                                    readOnly
                                                />
                                                <button className="font-medium underline text-red-600 text-sm" onClick={() => removeLanguage(lang)}>
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
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
                                            <button className="font-medium underline text-text1 text-sm" onClick={addLanguage}>
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Save & Cancel Buttons */}
                            <div className="mt-8 flex justify-end gap-3">
                                <button type="button" className={`btn1 ${!isModified || isUpdating || isUploading ? "disabled cursor-not-allowed" : ""}`} onClick={handleSave} disabled={!isModified || isUpdating}>
                                    {isUpdating || isUploading ? "Saving..." : "Save"}
                                </button>
                                <button type="button" className={`btn1 border border-text1 !bg-transparent !text-text1  ${!isModified || isUpdating || isUploading ? "cursor-not-allowed" : "hover:!text-primary hover:border-primary"}`} onClick={handleCancel} disabled={!isModified || isUpdating || isUploading}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserProfile;
