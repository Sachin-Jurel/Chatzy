import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import UseConversation from "../Manage/UseConversation.js";


const ChatUsers = () => {
  const [users, setUsers] = useState([]);
  const {selectedConversation, setSelectedConversation} = UseConversation();
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users",{
  withCredentials: true
});
        setUsers(res.data); 
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);
  

  return (
    <div className="flex-1 overflow-x-hidden p-3 space-y-3 overflow-y-scroll hide-scrollbar h-full">
      {users.map((user) => (
        <div
          onClick={() => {
            setSelectedConversation(user);
          }}
          key={user._id}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
    ${
      selectedConversation?._id === user._id
        ? "bg-cyan-900"
        : "bg-slate-800 hover:bg-slate-700"
    }
  `}
        >
          <img
            src={user.avatar || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQYHBQIE/8QAOBAAAgECAwUDCgQHAAAAAAAAAAECAwQFBhESITFBUROBoQciI0JhcXKxwdEVMjORFDRSYpKTov/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8ApYANAAAAAAAAAAAAAABJLgAAAAAAAAAAAAAAASAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAumV8k1L6nG7xXapUJb4UVulNdX0XiBTYQlUls04ylLpFas+tYTiTipKwudl8+yZs1jh9nh9NU7O3p0YpepHe+8+lolGDVac6UtirCUJdJRaPJul1Z295TdO6oU60WtNJx1KPmTIqp053WC66JaytpPXd/a/oKKED1KLjJxkmmtzT5HkoAAAAAI1JAAAAAAAAAAtmQcCjiV7K9uY621s1opcJz6dxqC3LccXJ9krPLllDTzqlPtZ+1y3/Y7WhAZKI0JIBDJAGd+UTAo0JxxW1hswqS2a6S3KXKXeUY2/GrSN9hV3az4VKUkvfpuMR0a3PiuJRAAKAAAAAAAAAAACX5X7gBo3LCZKWFWTjvXYU9P8UfWVzIl+r7LtCLfpbb0M1r04eHyLGQAAQAAB4qNKE2+Ci/kYRWadao1wcm1+5suZ76OHYFd3DlpJwcIfE9yMXLgAAoAAAAAAAAAAAAAO7lHHXgmJbdTV2tbzaqXJde412jVp1qUKlGanTnFOMo8GjBTuZdzPe4G+zh6a1b1dGb3L4ehBsIK7hudMFvYLtK7tamm+FdaePA6ixjDHDbWI2mz17aP3IPuInJQi5SaUUtW29EjhYhnDBLKLau1XmvUoLa8eHiUTMWb7zGFKhSX8NaP1IvzpfE/oUe88ZhWL3sbe1nrZ27ey+U5c5fYrI3EFAAAAAAAAAAAAAAAAEg6eDYDiGMy1s6Ho9d9Wb0gu/n3F0w7ye2VJRliFzUrz4uMFsR/fiKM37yN3sNntstYNbfpYbQ16zjtfM+z8MsFu/grb/UhRhq96fUlG0XGXsHude1w63evNR0fgcPEfJ/h9dN2NarbT6Pz4ijMgdnG8s4lg+s69HtKCe6tT3x7+aOMKAJIAAAAAAAAAAEgOehe8qZKVSEL3GYPZekoW3DX2y+xGQctKts4rf004r+XpyXF/1P6GgsgiFOFOnGnTjGMI8IxWiR63EEogAAAAAIcYtNNaxa0a6lJzTkmnXjO7weKhW4yoerP3dGXcAYJOMqc5QnFxlF6OL4pnk0jPuW1c0JYpYwSr01rWgl+pHr70Zx8iiAAUAAAAAA6OX8Nli+L29mm1Gb1nLpFb2c4u3kutdu/vbuS3UqUacX7ZPV+EfEmjRKNOFKlClSjswglGKXJI9gEAAAAAAAAAAAGk1o1qjGc04U8HxqvbxjpRk+0o/C/s9UbMZ/5U6Gk8OuUuKnTfgyihAAoAAAAABo3ktS/D76XPtor/AJAGi7gAyAAAAAAAAAAAFM8qEE8ItJv80bjd3xYBcGagAoAAD//Z"}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <p className="text-slate-100 font-medium">{user.name}</p>
            <p className="text-slate-400 text-sm">{user.lastMessage || "No message"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatUsers;
