import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import data from "../../DATA.json";
import React, { useState } from "react";
import { Button } from "../button";
import { Container } from "../container";
import Papa from "papaparse";
import {
    Clear,
    CreateNewFolder,
    DriveFileMove,
    IosShare,
} from "@mui/icons-material";
import { Billet } from "../billet";

type TypeTabel = {
    id: number;
    barcode: number;
    product_brand: string;
    product_name: string;
    product_quantity: number;
    price: number;
};

export const Table = () => {
    const [tableRow, setTableRow] = useState<TypeTabel[]>([]);
    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: 25,
        page: 0,
    });
    const [totalSumPrice, setTotalSumPrice] = useState<number>(0);
    const [totalSumCount, setTottalSumCount] = useState<number>(0);

    const calcSumm = () => {
        const sumQuantity = tableRow.reduce((acc, current) => acc + current.product_quantity, 0)
        const sumPrice = tableRow.reduce((acc, current) => acc + current.price, 0)

        setTotalSumPrice(sumPrice);
        setTottalSumCount(sumQuantity);
    }

    const exportDataToCSV = () => {
        const csv = Papa.unparse(tableRow);
        const csvBlob = new Blob([csv], { type: "text/csv" });
        const csvUrl = URL.createObjectURL(csvBlob);
        const link = document.createElement("a");
        link.href = csvUrl;
        link.download = "product_data.csv";
        link.click();
        URL.revokeObjectURL(csvUrl);
    };

    const handleSaveJson = (jsonData: any, filename: any) => {
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = `./${filename}.json`;
        link.href = url;
        link.click();
    };

    const handleProcessRowUpdate = (updatedRow: any, originalRow: any) => {
        const newRows = [...tableRow];
        const idx = newRows.findIndex((x) => x.id === originalRow.id);

        newRows[idx] = updatedRow;
        setTableRow(newRows);

        return updatedRow;
    };

    const columns: GridColDef[] = [
        {
            field: "barcode",
            headerName: "Баркод",
            width: 155,
            editable: true,
        },
        {
            type: "string",
            field: "product_brand",
            headerName: "Бренд",
            width: 128,
            editable: true,
        },
        {
            type: "string",
            field: "product_name",
            headerName: "Название",
            width: 215,
            editable: true,
        },
        {
            type: "number",
            field: "product_quantity",
            headerName: "Кол-во",
            width: 95,
            editable: true,
        },
        {
            type: "number",
            field: "price",
            headerName: "Цена",
            width: 128,
            editable: true,
        },
    ];

    return (
        <>
            <Container
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="7px"
                padding="0"
            >
                <Billet
                    id="barcode"
                    width="95px"
                    label="Баркод"
                    placeholder="32456"
                />
                <Billet
                    id="brand"
                    width="121px"
                    label="Бренд"
                    placeholder="alcatel"
                />
                <Billet
                    id="name"
                    width="135px"
                    label="Название"
                    placeholder="Samsung"
                />
                <Billet id="size" width="95px" label="Цена" placeholder="213" />
            </Container>
            <Container
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                padding="10px 0 28px 0"
                gap="7px"
            >
                <Button
                    width="auto"
                    paddingBlock="14px"
                    paddingInline="21px"
                    borderRadius="21px"
                    fontWeight="400"
                    fontSize="14px"
                >
                    Сформировать
                </Button>
                <Button
                    paddingBlock="14px"
                    paddingInline="21px"
                    width="auto"
                    fontWeight="400"
                    fontSize="14px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="4px"
                    borderRadius="30px"
                    background="#283047"
                    backgroundHover="#161D32"
                    onClick={() => {
                        exportDataToCSV();
                    }}
                >
                    <IosShare style={{ marginTop: "-9px" }} />
                    <span>Экспорт</span>
                </Button>
            </Container>
            <div
                style={{
                    borderTop: "1px solid #D7DADE",
                    borderBottom: "1px solid #D7DADE",
                    marginBottom: "28px",
                }}
            >
                <Container
                    padding="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Container
                        padding="0"
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                        gap="7px"
                    >
                        <Button
                            width="auto"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap="7px"
                            fontWeight="400"
                            fontSize="14px"
                            paddingBlock="14px"
                            paddingInline="8px"
                            background="none"
                            backgroundHover="none"
                            color="#283047"
                            onClick={() => {
                                setTableRow(data);
                            }}
                        >
                            <DriveFileMove />
                            <span style={{ marginTop: "2px" }}>
                                Загрузить данные из csv
                            </span>
                        </Button>
                        <Button
                            width="auto"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap="7px"
                            fontWeight="400"
                            fontSize="14px"
                            paddingBlock="14px"
                            paddingInline="8px"
                            background="none"
                            backgroundHover="none"
                            color="#283047"
                            onClick={() => {handleSaveJson(tableRow, 'DATA')}}
                        >
                            <CreateNewFolder />
                            <span style={{ marginTop: "2px" }}>
                                Изменить данные
                            </span>
                        </Button>
                    </Container>
                    <Button
                        width="auto"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap="7px"
                        fontWeight="400"
                        fontSize="14px"
                        paddingBlock="14px"
                        paddingInline="8px"
                        background="none"
                        backgroundHover="none"
                        color="#283047"
                        onClick={() => {
                            setTableRow([]);
                        }}
                    >
                        <span>Очистить</span>
                        <Clear style={{ width: "14px", marginTop: "1px" }} />
                    </Button>
                </Container>
            </div>
            <DataGrid
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                editMode="row"
                columns={columns}
                rows={tableRow}
                processRowUpdate={handleProcessRowUpdate}
                onProcessRowUpdateError={(params) => {
                    console.error(params);
                }}
                sx={{
                    background: "white",
                    borderRadius: "28px",
                    paddingInline: "21px",
                    paddingBlock: "14px",
                }}
            />
        </>
    );
};
