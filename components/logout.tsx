"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react'
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Logout = () => {
    const router = useRouter()
    const handleLogout = async()=>{
        await authClient.signOut();
        router.push("/")
    }
  return (
    <Button onClick={handleLogout} variant={"outline"} className=''>Logout 
    <LogOut className='size-4'/> </Button>
  )
}

export default Logout