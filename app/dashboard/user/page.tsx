"use client"

import { TableSupervisionComponent} from "@components";
import { Suspense } from "react";



export default function UserPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TableSupervisionComponent
        title="User"
        fetchControl={{ path: "users" }}
        columnControl={[
          {
            selector: "name",
            label: "Nama",
            sortable: true,
            width: "350px",
          },
          {
            selector: "username",
            label: "Username",
            sortable: true,
            width: "250px",
          },
        ]}
        detailControl={false}
        formControl={{
          fields: [
            {
              construction: {
                name: "username",
                label: "Username",
                placeholder: "Ex: joko.gunawan",
                validations: ["required"],
              },
            },
            {
              construction: {
                name: "name",
                label: "Name",
                placeholder: "Ex: Joko Gunawan",
              },
            },
            {
              construction: {
                name: "password",
                label: "Password",
                placeholder: "Ex: Secret#123",
              }
            },
          ],
        }}
        controlBar={["CREATE", "SEARCH", "SORT", "SELECTABLE", "REFRESH"]}
        responsiveControl={{
          mobile: true,
        }}
      />
    </Suspense>
  );
}