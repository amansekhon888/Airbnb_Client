import { useEffect, useState } from "react";
import { useAddWishlistMutation, useRemoveWishlistMutation } from "../services/api/property";
import { toast } from "react-toastify";

interface UseWishlistProps {
  initialIsWishlisted: boolean;
  propertyId: string;
}

interface UseWishlistReturn {
  isWishlisted: boolean;
  toggleWishlist: () => Promise<void>;
}

const useWishlist = (
  initialIsWishlisted: UseWishlistProps["initialIsWishlisted"],
  propertyId: UseWishlistProps["propertyId"]
): UseWishlistReturn => {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(initialIsWishlisted);
  const [addWishlist] = useAddWishlistMutation();
  const [removeWishlist] = useRemoveWishlistMutation();

  // Sync `isWishlisted` when `initialIsWishlisted` changes (e.g., when new data is fetched)
  useEffect(() => {
    setIsWishlisted(initialIsWishlisted);
  }, [initialIsWishlisted]);

  const toggleWishlist = async (): Promise<void> => {
    const previousState = isWishlisted; // Save the previous state

    setIsWishlisted(!isWishlisted); // Optimistically update UI

    try {
      if (previousState) {
        await removeWishlist(propertyId).unwrap();
        toast.success("Removed from wishlist successfully")
      } else {
        await addWishlist(propertyId).unwrap();
        toast.success("Added to wishlist successfully")
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
      setIsWishlisted(previousState); // Revert to previous state if API fails
    }
  };

  return { isWishlisted, toggleWishlist };
};

export default useWishlist;
