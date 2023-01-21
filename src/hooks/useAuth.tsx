import { useEffect, useState } from 'react'
import { useAppSelector } from './redux';

 const useAuth = (): string | null => {
    return useAppSelector((state)=>state).auth.user ?? null
}
export default useAuth;
