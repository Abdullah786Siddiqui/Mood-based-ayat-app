import { useState } from "react";
import { Button, Dialog } from "@/components/ui";

function DeleteConfirmModal() {
    const [isOpen, setIsOpen] = useState(false);
    
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const confirmDelete = () => {
        alert("Item Deleted!");
        closeModal();
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Button onClick={openModal} className="bg-red-600 text-white">Delete</Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="mb-4 text-lg">Are you sure you want to delete?</p>
                    <div className="flex justify-center space-x-4">
                        <Button onClick={confirmDelete} className="bg-red-600 text-white">Delete</Button>
                        <Button onClick={closeModal} className="bg-gray-500 text-white">Cancel</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
export default  DeleteConfirmModal;