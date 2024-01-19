import EditForm from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  let invoice = null,
    customers;
  try {
    let [invoiceRes, customersRes] = await Promise.all([
      fetchInvoiceById(id),
      fetchCustomers(),
    ]);
    invoice = invoiceRes;
    customers = customersRes;
    if (!invoice) {
      notFound();
    }
  } catch (error) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm invoice={invoice!} customers={customers!} />
    </main>
  );
}
