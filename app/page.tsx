import TicketDetail from "@/components/TicketDetail";

const TicketDetailPage = () => {
  const cloneTicket = {
    id: "12345",
    title: "Sample Ticket",
    description: "This is a sample ticket description.",
    status: "open" as "open",
    createdAt: new Date("2023-10-01T12:00:00Z"),
    updatedAt: new Date("2023-10-02T12:00:00Z"),
  };
  
  return (
    <div>
      <TicketDetail ticket={cloneTicket} />
    </div>
  );
};

export default TicketDetailPage;
