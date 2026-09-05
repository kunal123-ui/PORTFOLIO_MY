import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as storage from '../services/storage';

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(storage.getPortfolioData());

  const refreshData = useCallback(() => {
    setData(storage.getPortfolioData());
  }, []);

  // CRUD operations
  const addProject = (project) => { storage.addItem('projects', project); refreshData(); };
  const updateProject = (id, updates) => { storage.updateItem('projects', id, updates); refreshData(); };
  const deleteProject = (id) => { storage.deleteItem('projects', id); refreshData(); };

  const addSkill = (skill) => { storage.addItem('skills', skill); refreshData(); };
  const updateSkill = (id, updates) => { storage.updateItem('skills', id, updates); refreshData(); };
  const deleteSkill = (id) => { storage.deleteItem('skills', id); refreshData(); };

  const addExperience = (exp) => { storage.addItem('experience', exp); refreshData(); };
  const updateExperience = (id, updates) => { storage.updateItem('experience', id, updates); refreshData(); };
  const deleteExperience = (id) => { storage.deleteItem('experience', id); refreshData(); };

  const addEducation = (edu) => { storage.addItem('education', edu); refreshData(); };
  const updateEducation = (id, updates) => { storage.updateItem('education', id, updates); refreshData(); };
  const deleteEducation = (id) => { storage.deleteItem('education', id); refreshData(); };

  const addCertification = (cert) => { storage.addItem('certifications', cert); refreshData(); };
  const updateCertification = (id, updates) => { storage.updateItem('certifications', id, updates); refreshData(); };
  const deleteCertification = (id) => { storage.deleteItem('certifications', id); refreshData(); };

  const addAchievement = (ach) => { storage.addItem('achievements', ach); refreshData(); };
  const updateAchievement = (id, updates) => { storage.updateItem('achievements', id, updates); refreshData(); };
  const deleteAchievement = (id) => { storage.deleteItem('achievements', id); refreshData(); };

  const addMessage = (msg) => { storage.addItem('messages', msg); refreshData(); };
  const updateMessage = (id, updates) => { storage.updateItem('messages', id, updates); refreshData(); };
  const deleteMessage = (id) => { storage.deleteItem('messages', id); refreshData(); };

  const resetAllData = () => { storage.resetData(); refreshData(); };
  const importAllData = (jsonData) => {
    try {
      storage.importData(jsonData);
      refreshData();
      return true;
    } catch (e) {
      return false;
    }
  };

  const exportAllData = () => { storage.exportData(); };

  return (
    <PortfolioContext.Provider value={{
      data,
      refreshData,
      addProject, updateProject, deleteProject,
      addSkill, updateSkill, deleteSkill,
      addExperience, updateExperience, deleteExperience,
      addEducation, updateEducation, deleteEducation,
      addCertification, updateCertification, deleteCertification,
      addAchievement, updateAchievement, deleteAchievement,
      addMessage, updateMessage, deleteMessage,
      resetAllData, importAllData, exportAllData
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};
