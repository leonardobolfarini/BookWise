import { Sidebar } from "@/src/components/sidebar";
import { AppLayoutStyles } from "./AppLayoutStyles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayoutStyles>
      <Sidebar />
      <main>{ children }</main>
    </AppLayoutStyles>
  )
}