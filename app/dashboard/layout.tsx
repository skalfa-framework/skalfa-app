import { ReactNode } from "react";
import { SidebarComponent, SidebarContentComponent } from "@components";



export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex">
        <SidebarComponent
          basePath="/dashboard"
          head={
            <div className="px-4">
              <a href="#" className="text-2xl font-extrabold italic">
                SKALFA APP
              </a>
              <p className="text-sm -mt-1 font-semibold text-slate-400">
                Framework & Template
              </p>
            </div>
          }
          items={[
            {
              label  :  "WELCOME",
              items  :  [
                {
                  label  :  "Welcome",
                  path   :  "/",
                },
              ],
            },
            {
              label  :  "USER",
              items  :  [
                {
                  label  :  "User",
                  path   :  "/user",
                },
              ]
            },
          ]}
        />
        <SidebarContentComponent>
          <div className="p-2 lg:p-4">{children}</div>
        </SidebarContentComponent>
      </div>
    </>
  );
}
