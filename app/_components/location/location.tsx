import {LocationSheet} from "@/app/_components/location/location-sheet";
import {getUserAddresses} from "@/lib/modules/userAddress/useCases/getUserAddresses";
import {validateSession} from "@/lib/auth/validate-session";

interface LocationProps {
}

export async function Location(props: LocationProps) {
    const {user} = await validateSession()

    if (!user)
        return <LocationSheet
            locations={[]}
            defaultLocationIndex={-1}/>

    const locations = await getUserAddresses(user.id);

    return <LocationSheet
        userId={user.id}
        locations={locations}
        defaultLocationIndex={locations.findIndex((loc) => loc.isDefault) ?? -1}/>

}