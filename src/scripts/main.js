/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

const goData = () => {
  return fetch ("http://localhost:8088/employeeProfile?_expand=employee&_expand=department&_expand=computer")
  .then(response=> response.json())
  .then(jsonRes => {
    console.log(jsonRes[0].employee.name)
    console.log(jsonRes[0].department.name)
    console.log(jsonRes[0].computer.name)
  })
}

goData();