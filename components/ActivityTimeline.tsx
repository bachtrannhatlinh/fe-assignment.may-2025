import React from 'react';

const activities = [
  { id: 1, timestamp: '2023-10-01T10:00:00Z', description: 'Ticket created' },
  { id: 2, timestamp: '2023-10-02T12:30:00Z', description: 'Comment added by user' },
  { id: 3, timestamp: '2023-10-03T14:15:00Z', description: 'Status updated to "In Progress"' },
  { id: 4, timestamp: '2023-10-04T09:45:00Z', description: 'Comment added by support' },
  { id: 5, timestamp: '2023-10-05T16:00:00Z', description: 'Ticket resolved' },
];

const ActivityTimeline: React.FC = () => {
  return (
    <div className="activity-timeline">
      <h2>Activity Timeline</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <time>{new Date(activity.timestamp).toLocaleString()}</time>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityTimeline;