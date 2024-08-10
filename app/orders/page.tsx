import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function OrdersPage() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden md:table-cell">Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="hidden md:table-cell">Product</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium hidden md:table-cell">
            1237861238721
          </TableCell>
          <TableCell>19.07.2023</TableCell>
          <TableCell>89.90</TableCell>
          <TableCell className="hidden md:table-cell">
            Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
          </TableCell>
          <TableCell>On the way (approx. 10min)...</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
