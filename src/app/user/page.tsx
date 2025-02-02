import axios from "axios";
import BackendUrl from "@/config";

export default async function Page() {
  const response = await axios.get(`${BackendUrl}/api/v1/user/details`);

  const data = response.data;

  return (
    <div>
      {data.name}
      {""}
      {data.email}
    </div>
  );
}
