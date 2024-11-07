import { useCepStore } from "./address/cep";
import { useAuthStore } from "./auth/auth";

import { useOrderStore } from "./order/order";
import { useDriverStore } from "./driver/driver";
import { useVehicleStore } from "./vehicle/vehicle";
import { useEmployeeStore } from "./admin/employee";
import { useClientStore } from "./client/client";
import { useOfficeStore } from "./admin/offices";

export {
  useCepStore,
  useAuthStore,
  useOrderStore,
  useEmployeeStore,
  useDriverStore,
  useClientStore,
  useOfficeStore,
  useVehicleStore
}
