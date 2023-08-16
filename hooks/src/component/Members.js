function App() {
  const memberList = [
    {
      id: 1,
      first_name: "Lizbeth",
      age: 59,
    },
    {
      id: 2,
      first_name: "Pen",
      age: 15,
    },
    {
      id: 3,
      first_name: "Taffy",
      age: 45,
    },
    {
      id: 4,
      first_name: "La verne",
      age: 100,
    },
    {
      id: 5,
      first_name: "Etti",
      age: 21,
    },
    {
      id: 6,
      first_name: "Tootsie",
      age: 86,
    },
    {
      id: 7,
      first_name: "Friedrich",
      age: 14,
    },
    {
      id: 8,
      first_name: "Terrance",
      age: 39,
    },
    {
      id: 9,
      first_name: "Burton",
      age: 33,
    },
    {
      id: 10,
      first_name: "Granville",
      age: 66,
    },
  ];

  const filteredList = memberList.filter((member) => {
    return member.age < 50;
  });

  const list = filteredList.map((member)=>{
    return(
        <li>
            <strong>name: </strong>
            {member.first_name}, <strong>age: </strong>
            {member.age}
        </li>
    );
  });
  return <ul>{list}</ul>
}

export default App;
