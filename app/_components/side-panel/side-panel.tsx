import {SidePanelSheet} from "@/app/_components/side-panel/side-panel-sheet";
import {validateSession} from "@/lib/auth/validate-session";

interface SidePanelProps {
}

export async function SidePanel(props: SidePanelProps) {
    const {user} = await validateSession()

    return <SidePanelSheet user={user}/>
}