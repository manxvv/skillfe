import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const ProfileForm = () => {
  // Using react-hook-form
  const { control, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    const formattedData = {
      name: data.name,
      role: data.role,
      company: data.company,
      tags: data.tags.split(',').map(tag => tag.trim()),  // Splitting comma-separated tags into an array
      description: data.description,
      skills: data.skills.split(',').map(skill => skill.trim()), // Splitting comma-separated skills into an array
    };
    
    console.log("Formatted Data: ", formattedData);
    // You can save this data to your backend or state here
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...control.register('name', { required: 'Name is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="role">
            Role
          </label>
          <input
            type="text"
            id="role"
            {...control.register('role', { required: 'Role is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="company">
            Company
          </label>
          <input
            type="text"
            id="company"
            {...control.register('company', { required: 'Company is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="tags">
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            {...control.register('tags', { required: 'Tags are required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          {errors.tags && <p className="text-red-500 text-xs">{errors.tags.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            {...control.register('description', { required: 'Description is required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="skills">
            Skills (comma separated)
          </label>
          <input
            type="text"
            id="skills"
            {...control.register('skills', { required: 'Skills are required' })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
          {errors.skills && <p className="text-red-500 text-xs">{errors.skills.message}</p>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
