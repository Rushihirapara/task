import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const Propartyapi = createAsyncThunk(
    'Propartyapi',
    async (userdata, thunkAPI) => {

        try {            
            let result = await axios({ method: 'GET', url: `https://api.housivity.com/api/v1/property`, params: userdata });
            console.log('Propartyapi result.data >>', result.data);
            if (result.data.statusCode == 200) {
                return result.data;
            }
            else {
                return thunkAPI.rejectWithValue({ error: result.status });
            }
        } catch (error) {
            console.error('try catch [ Propartyapi ] error.message >>', error.message);
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    },
);

export const PwSlice = createSlice({
    name: 'PwSlice',
    initialState: {
        PropartyapiCount: 1,
        PropartyapiOfset: 1,
        PropartyapiData: [],
        LikePropartydata:[]

    },
    reducers: {
        updateState: (state, { payload }) => {
            state.isPropartyapi = payload.isPropartyapi !== undefined ? payload.isPropartyapi : state.isPropartyapi;
            state.LikePropartydata = payload.LikePropartydata !== undefined ? payload.LikePropartydata : state.LikePropartydata;

            return state;
        },
    },
    extraReducers: (builder) => {
        //========= Propartyapi
        builder.addCase(Propartyapi.fulfilled, (state,{payload}) => {
            console.log("payload.propertyList>>>>",payload)
            try {
                state.PropartyapiData = payload.propertyList;
                state.PropartyapiCount = payload.count;
                state.PropartyapiOfset = 15;

                state.isPropartyapi = true;
                state.isFetching = false;

                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                console.error('Error: Propartyapi.fulfilled try catch error >>', error);
            }
        })
        builder.addCase(Propartyapi.rejected, (state, { payload }) => {
            try {
                state.isPropartyapi = false;
                state.isFetching = false;

                state.isError = true;
                (payload) ? state.errorMessage = (payload.error.message_detail ? payload.error.message_detail : payload.error) : state.errorMessage = "API Response Invalid. Please Check API";
            } catch (error) {
                console.error('Error: [Propartyapi.rejected] try catch error >>', error);
            }
        })
        builder.addCase(Propartyapi.pending, (state) => {
            state.isFetching = true;

        })
    
    },
});

export const { updateState } = PwSlice.actions;
export const PwSelector = (state) => state.main.pw;
