import PageHtmlParser from '@/components/PageHtmlParser'

export default function Page({ params: { route } }: { params: { route: string[] } }) {
    //TODO: determine how to store/determine if the user is in edit mode
    //TODO: check if the user is editing tha page and return the editable layout
    return (
        <PageHtmlParser route={route} />
    )
}
