import { MotoDetail } from "../../apps/features/motobike/view";
import { MotoHome } from "../../apps/features/motobike/view/Home/Home";

export const routesMoto = [
    // { index: true, path: 'inicio', element: <div>arbnb index</div> },
    {
        path: '',
        element: <MotoHome />,
    },
    {
        path: 'detail',
        element: <MotoDetail />,
    }
]