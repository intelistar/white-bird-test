import { useState } from 'react';

import { AdminPostsList } from '@/modules/post';

import { AdminUsersList } from '../../components/AdminUsersList';
import { AdminTabs } from '../../types';
import styles from './styles.module.scss';

export const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<AdminTabs>(AdminTabs.USERS);

  const handleActiveTab = (tab: AdminTabs) => () => setActiveTab(tab);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Admin panel</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === AdminTabs.USERS ? styles.active : ''}`}
          onClick={handleActiveTab(AdminTabs.USERS)}
        >
          Users
        </button>
        <button
          className={`${styles.tab} ${activeTab === AdminTabs.POSTS ? styles.active : ''}`}
          onClick={handleActiveTab(AdminTabs.POSTS)}
        >
          Posts
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === AdminTabs.USERS && <AdminUsersList />}
        {activeTab === AdminTabs.POSTS && <AdminPostsList />}
      </div>
    </section>
  );
};
