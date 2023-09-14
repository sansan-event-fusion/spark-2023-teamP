import APIClientProvider from "@/app/api/APIClientProvider";

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <APIClientProvider mocked={true}>
        {children}
    </APIClientProvider>
  );
}