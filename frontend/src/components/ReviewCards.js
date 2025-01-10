import { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAxiosPrivate } from "../hooks/useAxiosPrivate";
import { useAuthContext } from "../hooks/useAuthContext";
import { useReviewsContext } from "../hooks/useReviewsContext";

export default function ReviewCards({
  id,
  content,
  rating,
  timeAdded,
  userInfo,
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  const { auth } = useAuthContext();
  const { dispatch } = useReviewsContext();

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (userInfo?.username && userInfo?._id) {
      setUsername(userInfo.username);
      setUserId(userInfo._id);
    } else if (userInfo && !userInfo?.username) {
      setUsername(auth?.username);
      setUserId(auth?.userId);
    } else if (!userInfo) {
      setUsername("Anonymous");
    }
  }, [auth, userInfo]);

  const handleClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = async (result) => {
    setShowConfirm(false);

    if (result) {
      const response = await axiosPrivate.delete(`/api/reviews/${id}`);

      if (response.statusText === "OK") {
        dispatch({ type: "DELETE_REVIEW", payload: response.data });
      }
    }
  };

  // TODO: styling: work on edit review after learning modal
  // TODO: styling: work on double confirm delete for user using modal
  return (
    <li className="border-2 border-black">
      <p>{username}</p>
      <p>{content}</p>
      <p>{rating}</p>
      <p>{formatDistanceToNow(new Date(timeAdded), { addSuffix: true })}</p>
      {auth && userId === auth?.userId ? (
        <button onClick={handleClick}>delete</button>
      ) : (
        <></>
      )}
      {showConfirm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50">
          <div className="w-64 mx-auto mt-16 p-4 bg-white rounded-lg shadow-lg">
            <p className="text-lg">Are you sure you want to proceed?</p>
            <div className="mt-4 flex">
              <button
                onClick={() => handleConfirm(false)}
                className="px-4 py-2 bg-red-500 text-white mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirm(true)}
                className="px-4 py-2 bg-green-500 text-white"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
