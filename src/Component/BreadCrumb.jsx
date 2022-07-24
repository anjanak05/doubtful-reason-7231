import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { ChevronRightIcon } from '@chakra-ui/icons';
const BreadCrumb = ({ breadTitle }) => {
  return (
    <div>
      <Breadcrumb
        spacing="-2px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            {' '}
            <Icon as={FaHome} fontSize={20} marginTop={3} />
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#" style={{textTransform:"Camel"}}>
            {breadTitle.current}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
