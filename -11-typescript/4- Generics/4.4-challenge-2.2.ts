type Id = { id: number };
type ApiResponse<T> = () => {
  status: number;
  payload: T & Id;
};

const fetchUser: ApiResponse<{ username: string }> = function () {
  return {
    status: 200,
    payload: { id: 1, username: "Mohamed" },
  };
};

// type FetchCompanyPayload = { id: number; name: string; numberOfCourses: number };
const fetchCompany: ApiResponse<{ name: string; numberOfCourses: number }> = function () {
  return {
    status: 200,
    payload: { id: 1, name: "Almdrasa", numberOfCourses: 100 },
  };
};

const response = fetchUser();
const response2 = fetchCompany();
console.log(response.payload.username); // Output: Mohamed
console.log(response2.payload.name); // Output: Almdrasa
