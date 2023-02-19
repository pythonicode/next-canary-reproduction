export default async function Dashboard() {
  const response = await fetch('https://localhost:3000/api');

  return <h1>Dashboard</h1>;
}
