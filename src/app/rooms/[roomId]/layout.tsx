import MockedClientProvider from "@/app/api/MockedClientProvider";

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MockedClientProvider>
        {children}
    </MockedClientProvider>
  );
}