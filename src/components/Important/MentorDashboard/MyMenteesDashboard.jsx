import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MuiChipsInput } from 'mui-chips-input';
import { useDispatch, useSelector } from 'react-redux';
import AuthActions from '../../../store/actions/auth-actions';

const MyMenteesDashboard = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  // const userDetails = useSelector((state) => state.auth.detail);
  const onSubmit = (data) => {
    const userid = JSON.parse(localStorage.getItem('user')).id; 


    const payload = {
      ...data,
      userid,
    };
  
    dispatch(AuthActions.detail(payload, () => {
      console.log("Formatted Data: ", payload);
    }));
  };
  




   useSelector(state=>{
    console.log('selectorreieved',state);
    let viewMode = state?.auth?.detail;
    console.log('selectorreieve111',viewMode);
    return viewMode;
  })

  
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
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

        {/* Role Field */}
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

        {/* Company Field */}
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

        {/* Tags Field (Chips Input) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="tags">
            Tags
          </label>
          <Controller
            name="tags"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <MuiChipsInput
                {...field}
                placeholder="Add tags (e.g., JavaScript, React)"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            )}
          />
          {errors.tags && <p className="text-red-500 text-xs">{errors.tags.message}</p>}
        </div>

        {/* Description Field */}
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

        {/* Skills Field (Chips Input) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="skills">
            Skills
          </label>
          <Controller
            name="skills"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <MuiChipsInput
                {...field}
                placeholder="Add skills (e.g., HTML, CSS)"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            )}
          />
          {errors.skills && <p className="text-red-500 text-xs">{errors.skills.message}</p>}
        </div>

        {/* Submit Button */}
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

export default MyMenteesDashboard;
