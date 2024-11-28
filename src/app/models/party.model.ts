export interface Party {
    id: number;
    title: string;
    description: string;
    date: string; // Use ISO format (e.g., '2024-01-01')
    time: string; // Use ISO time format (e.g., '12:30:00')
    location: string;
    theme: string;
    createdBy: number; // User ID of the creator
  }
  