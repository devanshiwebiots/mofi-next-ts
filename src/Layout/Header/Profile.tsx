import { Href, ImagePath, Logout } from "@/Constant";
import { UserProfileData } from "@/Data/Layout";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "react-feather";

export const Profile = () => {
  const { data: session } = useSession();
  const LogOutUser = () => {
    signOut();
  };

  return (
    <li className='profile-nav onhover-dropdown px-0 py-0'>
      <div className='d-flex profile-media align-items-center'>
        <Image height={30} width={30} className='img-30' src={session?.user?.image || `${ImagePath}/dashboard/profile.png`} alt='' />
        <div className='flex-grow-1'>
          <span>{session?.user?.email}</span>
          <p className='mb-0 font-outfit'>       
          {session?.user?.name || 'UI Designer'}<i className='fa fa-angle-down'></i>
          </p>
        </div>
      </div>
      <ul className='profile-dropdown onhover-show-div'>
        {UserProfileData.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.link}`}>
              {item.icon}
              <span>{item.title} </span>
            </Link>
          </li>
        ))}
        <li onClick={LogOutUser}>
          <Link href={Href} scroll={false}>
            <LogOut />
            <span>{Logout} </span>
          </Link>
        </li>
      </ul>
    </li>
  );
};
