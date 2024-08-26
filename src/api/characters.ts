import { Gender, Species, Status } from "@/types/status";
import { Character, ResponseData } from "../types/Character";
import { client } from "../utils/axiosClient";

export const getCharacters = (
  page: number,
  name: string,
  charStatus: Status,
  charGender: Gender,
  charSpecies: Species
) => {
  return client.get<ResponseData>(
    `/character/?page=${page}
    ${name ? `&name=${name}` : ""}
    ${charStatus ? `&status=${charStatus}` : ""}
    ${charGender ? `&gender=${charGender}` : ""}
    ${charSpecies ? `&species=${charSpecies}` : ""}`
  );
};

// export const getCharacter = () => {
//   return client.get<Character[]>("/character");
// };
