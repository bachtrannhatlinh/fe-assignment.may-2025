export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Activity {
  id: string;
  ticketId: string;
  action: string;
  timestamp: Date;
  user: string;
}