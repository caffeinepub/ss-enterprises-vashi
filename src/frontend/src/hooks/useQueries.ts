import { useActor } from "@/hooks/useActor";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useSubmitForm() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      mobileNumber: string;
      email: string;
      serviceType: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitForm(
        data.name,
        data.mobileNumber,
        data.email,
        data.serviceType,
        data.message
      );
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
