import { authClient } from "../lib/auth-client"; // এক্সপোর্ট করা ক্লায়েন্টটি ইমপোর্ট করুন

export function User() {
    // সরাসরি authClient থেকে useSession হুক ব্যবহার করুন
    const { 
        data: session, 
        isPending, 
        error, 
        refetch 
    } = authClient.useSession();
    console.log("User session data:", session);
    
    // লোডিং বা এরর হ্যান্ডেলিং যোগ করা ভালো
    if (isPending) return <span className="text-white">Loading...</span>;
    if (error) return <span className="text-red-500">Error loading user</span>;

    return (
       <h2 className="text-white">{session?.user?.email}</h2>
    );
}