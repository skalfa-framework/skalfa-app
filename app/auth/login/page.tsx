"use client"

import { useRouter } from "next/navigation";
import { ButtonComponent, CardComponent, FormSupervisionComponent } from "@components";
import { useAuthContext } from "@contexts";



export default function LoginPage() {
  const router = useRouter();
  const {setAccessToken,setUser} = useAuthContext();

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-extrabold italic">WELCOME TO SKALFA APP</h1>
        <p className="text-sm font-semibold mt-6">Sign in with your account!</p>

        <CardComponent className="mt-4 p-6 w-[400px] rounded-2xl">
          <FormSupervisionComponent
            fields={[
              {
                construction: {
                  name         :  "username",
                  label        :  "Username",
                  placeholder  :  "Ex: admin",
                  validations  :  ["required"],
                }
              },
              {
                construction: {
                  type         :  "password",
                  name         :  "password",
                  label        :  "Password",
                  placeholder  :  "Enter your password",
                }
              }
            ]}
            submitControl={{
              path: "login"
            }}
            onSuccess={(res) => {
              setAccessToken(res?.data?.token)
              setUser(res?.data?.user)
              router.push("/dashboard")
            }}
            successMessage="Berhasil Masuk!"
            footerControl={({ loading }) => (
              <>
                <ButtonComponent
                  type="submit"
                  label="Login Now"
                  block
                  className="mt-4"
                  loading={loading}
                />
              </>
            )}
          />
        </CardComponent>
      </div>
    </>
  );
}
