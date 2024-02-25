import ChatWrapper from "@/components/chat/ChatWrapper";
import PdfRenderer from "@/components/PdfRenderer";
import UploadButton from "@/components/UploadButton";
import { redirect } from "next/navigation";



const Page = async() => {
    
    return(
        <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
            <div className="flex ml-10">
                <UploadButton></UploadButton>
            </div>
            <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
                
                {/* left side */}
                <div className="flex-1 flex">
                    <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
                        <PdfRenderer url='/hp-book.pdf' />
                    </div>
                </div>

                {/* right side */}
                <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
                    <ChatWrapper />
                </div>
            </div>
        </div>
    )
}

export default Page