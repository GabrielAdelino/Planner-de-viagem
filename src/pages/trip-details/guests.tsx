import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return(
        <div className="space-y-6">
                        <h2 className="fonrt-semibold text-xl">Convidados</h2>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Rafael Costa</span>
                                    <span className="block text-sm text-zinc-400 truncate"> rafael.costa@gamil.com</span>
                                </div>
                                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Jesse Pinkman</span>
                                    <span className="block text-sm text-zinc-400 truncate"> pinkman123@gmail.com </span>
                                </div>
                                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                            </div>
                        </div>
                        <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                            <UserCog className="size-5" />
                            Gerenciar convidados
                        </button>

                        <Button variant='secondary' size="full">
                            <UserCog className="size-5" />
                            Gerenciar convidados
                        </Button>
                    </div>
    )
}