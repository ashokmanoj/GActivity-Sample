import React, { useState } from "react";
import { toast } from "react-toastify";
import { FiEdit, FiEye, FiTrash2, FiUpload } from "react-icons/fi";

export default function UserActivation() {
  const [filters, setFilters] = useState({
    project: "",
    rm: "",
    designation: "",
    district: "",
    block: "",
    executive: "",
    institution: "",
  });

  const [file, setFile] = useState(null);
  const [resultData, setResultData] = useState([]);

  // Dummy data on search
  const dummyUsers = [
    {
      id: 1,
      name: "Abdul Jalil",
      phone: "8011500514",
      designation: "Installation Interns",
      rm: "BIKASH",
      active: true,
    },
    {
      id: 2,
      name: "Akash Das",
      phone: "9678253588",
      designation: "Technical Executive",
      rm: "BIKASH",
      active: false,
    },
    {
      id: 3,
      name: "Anupam Dutta",
      phone: "9613705280",
      designation: "Installation Interns",
      rm: "BIKASH",
      active: true,
    },
    {
      id: 4,
      name: "Rohit Sharma",
      phone: "9876543210",
      designation: "Technical Executive",
      rm: "BIKASH",
      active: false,
    },
    {
      id: 5,
      name: "Rohit Sharma",
      phone: "9876543210",
      designation: "Technical Executive",
      rm: "BIKASH",
      active: false,
    },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSearch = () => {
    setResultData(dummyUsers);
    toast.success("Search completed!");
  };

  const handleEdit = (user) => {
    toast.info(`Editing user: ${user.name}`);
  };

  const handleDelete = (userId) => {
    setResultData(resultData.filter((u) => u.id !== userId));
    toast.error("User deleted!");
  };

  const handleView = (user) => {
    toast.info(`Viewing user: ${user.name}`);
  };

  const handleUpload = () => {
    toast.success("File uploaded successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({
      project: "",
      rm: "",
      designation: "",
      district: "",
      block: "",
      executive: "",
      institution: "",
    });
    setResultData([]);
  };

  return (
    <div className="p-6 space-y-6">
      {/* -------------------------- FORM FILTER SECTION ------------------------ */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Project */}
        <SelectBox
          label="Project"
          value={filters.project}
          options={["Tele Education", "APECR", "Installation"]}
          onChange={(v) => setFilters({ ...filters, project: v })}
        />

        {/* RM */}
        <SelectBox
          label="RM"
          value={filters.rm}
          options={["BIKASH", "ANUPAM", "ROHIT"]}
          onChange={(v) => setFilters({ ...filters, rm: v })}
        />

        {/* Designation */}
        <SelectBox
          label="Designation"
          value={filters.designation}
          options={["Technical Executive", "Operator", "Interns"]}
          onChange={(v) => setFilters({ ...filters, designation: v })}
        />

        {/* District */}
        <SelectBox
          label="District"
          value={filters.district}
          options={["Kamrup", "Barpeta", "Dibrugarh", "Nagaon"]}
          onChange={(v) => setFilters({ ...filters, district: v })}
        />

        {/* Block */}
        <SelectBox
          label="Block"
          value={filters.block}
          options={["Block A", "Block B", "Block C"]}
          onChange={(v) => setFilters({ ...filters, block: v })}
        />

        {/* Executive */}
        <SelectBox
          label="Technical Executive"
          value={filters.executive}
          options={["Executive 1", "Executive 2", "Executive 3"]}
          onChange={(v) => setFilters({ ...filters, executive: v })}
        />

        {/* Institution */}
        <InputBox
          label="Institution Name"
          value={filters.institution}
          onChange={(v) => setFilters({ ...filters, institution: v })}
        />

        {/* Upload XLS */}
        <div>
          <label className="text-gray-700 text-sm">Upload XLS Format</label>
          <input
            type="file"
            className="mt-1 w-full border p-2 rounded"
            onChange={(e) => setFile(e.target.files[0])}
            accept=".xls, .xlsx"
            onClick={handleFileUpload}
          />
          {/* {file && <p>Selected file: {file.name}</p>} */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
            onClick={handleUpload}>
            <FiUpload size={20} />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
        >
          Search
        </button>

        <button
          className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {/* -------------------------- RESULT TABLE ------------------------ */}
      {resultData.length > 0 && (
        <div className="overflow-x-auto mt-6 bg-white rounded shadow p-4 text-center">
          <table className="w-full text-sm border">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-2 border">SL No</th>
                <th className="p-2 border">User Name</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Designation</th>
                <th className="p-2 border">RM Name</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {resultData.map((user, index) => (
                <tr key={user.id} className="odd:bg-gray-50 ">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.phone}</td>
                  <td className="border p-2">{user.designation}</td>
                  <td className="border p-2">{user.rm}</td>
                  <td className="border p-2">
                    {user.active ? (
                      <span className="text-green-600 font-semibold">Active</span>
                    ) : (
                      <span className="text-red-600 font-semibold">Inactive</span>
                    )}
                  </td>

                  {/* ACTIONS */}
                  <td className="border p-2 flex gap-5 justify-center ">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FiEdit size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FiTrash2 size={18} />
                    </button>
                    <button
                      onClick={() => handleView(user)}
                      className="text-green-600 hover:text-green-800"
                    >
                      <FiEye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* -------------------------- Reusable Input Components ------------------------ */

function SelectBox({ label, value, options, onChange }) {
  return (
    <div>
      <label className="text-gray-700 text-sm">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 border-b p-2 outline-none"
      >
        <option value="">Select {label}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function InputBox({ label, value, onChange }) {
  return (
    <div>
      <label className="text-gray-700 text-sm">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 border-b p-2 outline-none"
        placeholder={`Select ${label}`}
      />
    </div>
  );
}
