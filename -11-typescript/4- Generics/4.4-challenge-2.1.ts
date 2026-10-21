type FetchUser = () => {
  status: number;
  payload: {
    id: number;
    username: string;
  };
};

const fetchUser: FetchUser = function () {
  return {
    status: 200,
    payload: { id: 1, username: "Mohamed" },
  };
};

type FetchCompany = () => {
  status: number;
  payload: {
    id: number;
    name: string;
    numberOfCourses: string;
  };
};

function fetchCompany() {
  return {
    status: 200,
    payload: { id: 1, name: "Almdrasa", numberOfCourses: 100 },
  };
}

const response = fetchUser();
const response2 = fetchCompany();
console.log(response.payload.username); // Output: Mohamed
console.log(response2.payload.name); // Output: Almdrasa
