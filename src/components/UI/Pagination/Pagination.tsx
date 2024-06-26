import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

interface PaginationProps {
    handleChangePage: (page: number) => void
    currentPage: number
    itemsLength: number
}

const Pagination: FC<PaginationProps> = ({
    handleChangePage,
    currentPage,
    itemsLength,
}) => {
    const numberOfPages = Math.ceil(itemsLength / 4) || 3

    return (
        <ReactPaginate
            className={styles.pagination}
            previousClassName={styles.page}
            pageClassName={styles.page}
            nextClassName={styles.page}
            breakClassName={styles.page}
            breakLinkClassName={styles.page__link}
            previousLinkClassName={styles.page__link}
            pageLinkClassName={styles.page__link}
            nextLinkClassName={styles.page__link}
            activeLinkClassName={styles.active}
            disabledLinkClassName={styles.disabled}
            breakLabel='...'
            nextLabel='>'
            onPageChange={(event) => handleChangePage(event.selected + 1)}
            pageRangeDisplayed={3}
            pageCount={numberOfPages}
            previousLabel='<'
            forcePage={currentPage - 1}
        />
    )
}

export default Pagination
