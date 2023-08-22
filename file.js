const data = [];
let editIndex = -1;

const displayData = () => {
  const rows = document.getElementById("dataRows");
  rows.innerHTML = "";
  data.forEach((item, index) => {
    const newRow = `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.lname}</td>
        <td>${item.age}</td>
        <td>
          <button class="btn btn-danger" type="button" onClick="deleteUser(${index})">Delete</button>
          <button class="btn btn-warning" type="button" onClick="editUser(${index})">Edit</button>
        </td>
      </tr>
    `;
    rows.innerHTML += newRow;
  });
};

function addUser(id, name, lname, age) {
  const existingUser = data.find((item) => item.id === id);

  if (existingUser) {
    alert("User already exists with the same ID.");
    return;
  }

  data.push({ id, name, lname, age });
  displayData();
  clearForm();
}

function updateUser(id, name, lname, age) {
  data[editIndex] = { id, name, lname, age };
  displayData();
  clearForm();
  editIndex = -1;
}

function deleteUser(index) {
  data.splice(index, 1);
  displayData();
}

function clearForm() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("age").value = "";
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  const id = parseInt(document.getElementById("id").value);
  const name = document.getElementById("name").value;
  const lname = document.getElementById("lname").value;
  const age = parseInt(document.getElementById("age").value);

  if (!id || !name || !lname || !age) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  addUser(id, name, lname, age);
});

function editUser(index) {
  const user = data[index];
  document.getElementById("id").value = user.id;
  document.getElementById("name").value = user.name;
  document.getElementById("lname").value = user.lname;
  document.getElementById("age").value = user.age;
  editIndex = index;
}

const updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", () => {
  const id = parseInt(document.getElementById("id").value);
  const name = document.getElementById("name").value;
  const lname = document.getElementById("lname").value;
  const age = parseInt(document.getElementById("age").value);

  if (!id || !name || !lname || !age) {
    alert("Please fill in all fields before updating.");
    return;
  }

  updateUser(id, name, lname, age);
});

displayData();
console.log(data);
