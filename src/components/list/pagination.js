import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    //ceil làm tròn lên

    const [number] = useState(2);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollX >= 980) {
    //             setNumber(2)
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll)
    // }, [])

    if (pageNumbers.length > 1) {
        return (
            <Stack>
                <Pagination
                    count={pageNumbers.length}
                    onChange={(event, value) => paginate(value)}
                    color="primary"
                    sx={{
                        mt: 2,
                        mb: 2,
                    }}
                    boundaryCount={number}
                />
            </Stack>
        );
    }

    return null;
};
