import {
  addSearch,
  changeGender,
  changeSpecies,
  changeStatus,
} from "@/features/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Gender, Species, Status } from "@/types/status";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const Filters: React.FC = () => {
  const charactersSearch = useAppSelector((state) => state.filter.search);
  const charactersStatus = useAppSelector((state) => state.filter.status);
  const charactersGender = useAppSelector((state) => state.filter.gender);
  const charactersSpecies = useAppSelector((state) => state.filter.species);
  const dispatch = useAppDispatch();
  const allStatus = Object.entries(Status);
  const allGender = Object.entries(Gender);
  const allSpecies = Object.entries(Species);

  return (
    <div className="flex-wrap md:flex-nowrap sm:flex sm:gap-x-2 mt-6">
      <TextField
        id="filled-basic"
        label="Filled"
        className="mb-6 md:mb-0 w-[250px]"
        value={charactersSearch}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(addSearch(event.target.value));
        }}
        variant="filled"
        sx={{
          backgroundColor: "#e9dbb4",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black", // Нижня рамка
            },
            "&:hover fieldset": {
              borderColor: "black", // Нижня рамка при наведенні
            },
            "&.Mui-focused fieldset": {
              borderColor: "black", // Нижня рамка при фокусуванні
            },
          },
          "& .MuiInputLabel-root": {
            color: "black", // Колір мітки
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#f7a15a", // Колір мітки при фокусуванні
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#f7a15a", // Колір плейсхолдера
          },
        }}
      />
      <div className="flex flex-wrap md:mt-0 gap-x-2 ">
        <FormControl fullWidth className="w-[150px] mb-2 md:mb-0">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={charactersStatus}
            label="Status"
            onChange={(e) => dispatch(changeStatus(e.target.value as Status))}
          >
            {allStatus.map((oneStatus) => (
              <MenuItem key={oneStatus[1]} value={oneStatus[1]}>
                {oneStatus[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth className="w-[150px] mb-2 md:mb-0">
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={charactersGender}
            label="Gender"
            onChange={(e) => dispatch(changeGender(e.target.value as Gender))}
          >
            {allGender.map((oneGender) => (
              <MenuItem key={oneGender[1]} value={oneGender[1]}>
                {oneGender[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth className="w-[150px]">
          <InputLabel id="demo-simple-select-label">Species</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={charactersSpecies}
            label="Species"
            onChange={(e) => dispatch(changeSpecies(e.target.value as Species))}
          >
            {allSpecies.map((oneSpecie) => (
              <MenuItem key={oneSpecie[1]} value={oneSpecie[1]}>
                {oneSpecie[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
