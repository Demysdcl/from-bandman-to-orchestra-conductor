import {
  Employee,
  deleteEmployee,
} from '@/modules/Shared/service/employeeService'
import { Dispatch, SetStateAction } from 'react'

let counter = 0

interface DeleteConfirmationModalProps {
  openConfirmationModal: boolean
  onClose: (employee?: Employee) => void
  selectedEmployee: Employee
  onLoading: Dispatch<SetStateAction<boolean>>
  onDeleted: (employee: Employee) => void
}

export const DeleteConfirmationModal = ({
  openConfirmationModal,
  onClose,
  selectedEmployee,
  onLoading,
  onDeleted,
}: DeleteConfirmationModalProps) => {
  if (!openConfirmationModal) return <></>

  console.log('DeleteConfirmationModal counter', ++counter)

  const handleDeletion = async () => {
    onLoading(true)
    await deleteEmployee(selectedEmployee?.id!)
    onClose()
    onDeleted(selectedEmployee)
    onLoading(false)
  }

  return (
    <section
      className={`z-10 top-0 fixed w-full h-full bg-black bg-opacity-50`}
    >
      <div className="bg-white p-8 mt-72 mx-auto max-w-md rounded relative">
        <span
          onClick={() => onClose()}
          className="absolute right-5 top-5 cursor-pointer"
        >
          ❌
        </span>

        <h1 className="mb-8 text-2xl font-bold">Confirm deletion</h1>

        <span>
          Do you really want to delete <strong>{selectedEmployee?.name}</strong>
          ?
        </span>

        <div className="flex gap-4 w-full">
          <button
            onClick={() => onClose()}
            className="flex-1 border border-red-500 hover:border-red-700 hover:text-red-700 text-red-500 font-bold py-2 mt-8 px-4 rounded"
          >
            Close
          </button>
          <button
            onClick={handleDeletion}
            className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 mt-8 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  )
}
