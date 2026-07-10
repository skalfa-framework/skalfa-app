"use client"

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@skalfa/skalfa-icon";
import { auth } from "@skalfa/skalfa-app-core";
import { ImageComponent, ModalConfirmComponent, SidebarComponent, SidebarContentComponent } from "@components";
import { useAuthContext } from "@contexts";



export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router    =  useRouter()
  const { user }  =  useAuthContext();

  const [modalLogout, setModalLogout] = useState(false);
  const [tabSetting, setTabSetting] = useState(false);

  return (
    <>
      <div className="flex">
        <SidebarComponent
          basePath="/dashboard"
          head={
            <div className="p-4 flex items-center gap-2">
              <ImageComponent src="/images/logo.png" width={35} height={35} alt="" />
              <h2 className="text-lg font-bold">SKALFA</h2>
            </div>
          }
          footer={
            <div
              className="p-4 border-t cursor-pointer rounded-r-lg z-40 sticky -bottom-0 left-0 w-full"
              onClick={() => setTabSetting(!tabSetting)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Icon
                    icon="solid/user-circle"
                    className="text-light-foreground text-2xl"
                  />
                  <div>
                    <p className="text-sm">{user?.name}</p>
                  </div>
                </div>
                <Icon
                  icon="solid/cog"
                  className="text-sm mr-2"
                />
              </div>

              {tabSetting && (
                <div className="flex flex-col gap-y-4 mt-6 px-2 bg-background">
                  <div className="flex gap-2 items-center cursor-pointer hover:text-primary">
                    <div className="w-4 flex justify-center items-center">
                      <Icon
                        icon="solid/wrench"
                        className="text-xs mr-2"
                      />
                    </div>
                    <p className="text-xs">Pengaturan</p>
                  </div>
                  <div className="flex gap-2 items-center cursor-pointer hover:text-primary">
                    <div className="w-4 flex justify-center items-center">
                      <Icon
                        icon="solid/user-edit"
                        className="text-xs mr-2"
                      />
                    </div>
                    <p className="text-xs">Edit Profile</p>
                  </div>
                  <div
                    className="flex gap-2 items-center cursor-pointer hover:text-danger"
                    onClick={() => setModalLogout(true)}
                  >
                    <div className="w-4 flex justify-center items-center">
                      <Icon
                        icon="solid/power-off"
                        className="text-xs mr-2"
                      />
                    </div>
                    <p className="text-xs">Keluar</p>
                  </div>
                </div>
              )}
            </div>
          }
          items={[
            {
              label  :  "WELCOME",
              items  :  [
                {
                  leftContent  :  <Icon icon="solid/home" className="w-6 text-sm" />,
                  label        :  "Welcome",
                  path         :  "/",
                },
              ],
            },
            {
              label  :  "USER",
              items  :  [
                {
                  leftContent  :  <Icon icon="solid/user" className="w-6 text-sm" />,
                  label        :  "User",
                  path         :  "/user",
                },
              ]
            },
          ]}
        />
        <SidebarContentComponent>
          <div className="p-2 lg:p-4">{children}</div>
        </SidebarContentComponent>
      </div>


      <ModalConfirmComponent
        show={modalLogout}
        onClose={() => setModalLogout(false)}
        title="Yakin ingin keluar?"
        className="!border-danger"
        submitControl={{
          paint: "danger",
          label: "Keluar",
          onClick: () => {
            auth.deleteAccessToken();
            router.push("/");
          },
        }}
      />
    </>
  );
}
