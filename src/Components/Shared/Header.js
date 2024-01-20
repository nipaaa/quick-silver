import profile from "../../assets/profile.png";
import arrow from "../../assets/green-arrow.png";
import dot from "../../assets/dot.png";
import manage from "../../assets/manage.png";
import signOut from "../../assets/sign-out.png";
import { useState } from "react";
import Link from "next/link";
import CustomModal from "./Modal/CustomModal";
import Profile from "./Modal/Profile";

const Header = () => {
  const [show, setShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div>
      <div className="header ">
        <h2 className="text-[28px] font-bold">Office Dashboard</h2>
        <div className="flex items-center gap-5">
          <input type="search" placeholder="Search" />
          <div
            onClick={() => setShow(!show)}
            className="flex items-center gap-2 w-full profile cursor-pointer "
          >
            <img
              height={40}
              width={40}
              className="rounded-full"
              src={profile.src}
              alt=""
            />
            <p className="name">John Doe</p>
            <img src={arrow.src} alt="" />
          </div>
          {show && (
            <div className="flex items-start gap-4 justify-between profile_box fs_18">
              <div
                onClick={openModal}
                className="flex items-start gap-4 cursor-pointer"
              >
                <img
                  height={59}
                  width={59}
                  className="rounded-full"
                  src={profile.src}
                  alt=""
                />
                <div>
                  <div>
                    <p className="name ">John Doe</p>
                    <p className="email ">john.doe@gmail.com</p>
                  </div>
                  <Link
                    style={{ display: "flex" }}
                    className="  items-center gap-3 "
                    href="#"
                  >
                    <img src={manage.src} alt="" />
                    Manage account
                  </Link>
                  <Link
                    style={{ display: "flex" }}
                    className="  items-center gap-3"
                    href="#"
                  >
                    <img src={signOut.src} alt="" />
                    Sign Out
                  </Link>
                </div>
              </div>
              <img src={dot.src} alt="" />
            </div>
          )}
        </div>
      </div>
      <CustomModal
        isOpen={modalOpen}
        onClose={closeModal}
        submitTitle={"Save"}
        onSave={closeModal}
      >
        <Profile />
      </CustomModal>
    </div>
  );
};

export default Header;
