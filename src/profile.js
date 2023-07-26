import { profilesUrl } from "./Config";


export const createprofile = async (profileData) => {
  const response = await fetch(
    `${profilesUrl}/Users`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData)
    }
  );
  const profile = await response.json();
  return profile;
}

export const getprofiles = async () => {
  const response = await fetch(
    `${profilesUrl}/Users`
  );
  const profiles = await response.json();
  return profiles;
}

export const getprofile = async (profileId) => {
  const response = await fetch(
    `${profilesUrl}/Users/${profileId}`
  );
  const profile = await response.json();
  return profile;
}

export const deleteprofile = async (profileId) => {
  const response = await fetch(
    `${profilesUrl}/Users/${profileId}`,
    {
      method: 'DELETE'
    }
  );
  const profile = await response.json();
  return profile;
}

export const updateProfile = async (profileId, profileData) => {
  const response = await fetch(
    `${profilesUrl}/Users/${profileId}`,
    {
      method: 'PUT',
      body: JSON.stringify(profileData),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const profile = await response.json();
  return profile;
}




