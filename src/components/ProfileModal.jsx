import { useUserContext } from "../context/userContext";

const ProfileModal = ({ user, visible, onClose }) => {
  if (!visible) {
    return null;
  }
  const { isAuthenticated, handleLogout } = useUserContext();
  console.log("modal called", user);
  return (
    isAuthenticated && (
      <section
        id="modal-container"
        onClick={(e) => {
          if (e.target.id === "modal-container") {
            onClose();
          }
        }}
        className="fixed z-50 text-white inset-0 bg-black bg-opacity-30 backdrop-blur flex justify-center items-center"
      >
        <div className="modal-body bg-gray-950  rounded-lg flex flex-col items-start px-16 py-8 space-y-3">
          <h3 className="text-2xl">Name : {user?.name || "User"}</h3>
          <img
            src={user?.photo.secure_url}
            alt=""
            className="w-[200px] h-[200px] rounded-full object-fill"
          />
          <p>
            Email :{" "}
            <span className="text-sm underline text-blue-600">
              {user?.email}
            </span>
          </p>
          <p>
            Role :{" "}
            <span className="text-sm  text-blue-600">
              {user?.role === "user" ? "Customer" : "Admin"}
            </span>
          </p>
          <button
            type="button"
            onClick={handleLogout}
            className="mx-auto rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Logout
          </button>
        </div>
      </section>
    )
  );
};

export default ProfileModal;
